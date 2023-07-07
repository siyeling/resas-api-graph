import { useState, createContext, useEffect } from 'react';
import { prefecture } from '../types';
import { useQueryClient } from '@tanstack/react-query';
import Chartgraph from './Chartgraph';
import './Prefecture.css';

export const CheckboxList = createContext<Set<number>>(new Set<number>());

export const Prefecture: React.FunctionComponent = () => {
    const queryClient = useQueryClient();
    const data: prefecture[] | undefined = queryClient.getQueryData([
        'prefectures',
    ]);
    const [checkedPrefectures, setPrefectureChecked] = useState(
        new Set<number>()
    );
    const [, setFlag] = useState(0);
    const [selectMode, setSelectMode] = useState(0);

    if (data === undefined) {
        return <span>Error</span>;
    }

    const OnChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrefectureChecked((tmp: Set<number>) => {
            if (e.target.checked) {
                tmp.add(Number(e.target.value));
                return tmp;
            } else {
                tmp.delete(Number(e.target.value));
                return tmp;
            }
        });
        setFlag((tmp) => tmp + 1);
    };

    const OnChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectMode((tmp) => (tmp = Number(e.target.value)));
    };

    return (
        <div>
            <h1 className="maintag">都道府県</h1>
            <div className="grid-container">
                {data.map((prefecture: prefecture) => {
                    return (
                        <div
                            key={String(prefecture.prefCode)}
                            className="grid-item"
                        >
                            <input
                                id={String(prefecture.prefCode)}
                                type="checkbox"
                                value={prefecture.prefCode}
                                onChange={OnChangeCheckbox}
                            />
                            <label>{prefecture.prefName}</label>
                        </div>
                    );
                })}
                <div className="grid-item"></div>
            </div>
            <h1>グラフ</h1>
            <div className="selectarea">
                <select name="category" onChange={OnChangeSelect}>
                    <option value="0">総人口</option>
                    <option value="1">年少人口</option>
                    <option value="2">生産年齢人口</option>
                    <option value="3">老年人口</option>
                </select>
            </div>
            <Chartgraph checkList={checkedPrefectures} index={selectMode} />
        </div>
    );
};
