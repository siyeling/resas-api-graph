import { useState, useEffect } from 'react';
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    Line,
} from 'recharts';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { populationData, prefecture } from '../types';
import ColorGenerator from './ColorGenerator';
import './Chartgraph.css';

type chartData = {
    year: number;
    [key: `${string}`]: number;
}[];

type Props = {
    checkList: Set<number>;
    index: number;
};

const dataConvert = (
    selected: Set<number>,
    queryClient: QueryClient,
    index: number
) => {
    let convertData: chartData = [];

    let max: { value: number; prefCode: number } = { value: 0, prefCode: 0 };
    const value: populationData | undefined = queryClient.getQueryData([
        'population',
        1,
    ]);
    if (value === undefined) {
        return;
    }
    const arrayLength: number = value.data[index].data.length;

    for (let i: number = 0; i < arrayLength; i++) {
        convertData.push({
            year: value.data[index].data[i].year,
        });
    }

    for (const prefCode of selected) {
        const value: populationData | undefined = queryClient.getQueryData([
            'population',
            prefCode,
        ]);
        if (value === undefined) {
            return;
        }
        for (let i: number = 0; i < arrayLength; i++) {
            convertData[i][`${prefCode}`] = value.data[index].data[i].value;
            if (max.value <= value.data[index].data[i].value) {
                max.prefCode = prefCode;
                max.value = value.data[index].data[i].value;
            }
        }
    }
    return { convertData: convertData, maxpref: max.prefCode };
};

export const Chartgraph: React.FunctionComponent<Props> = (props) => {
    const queryClient = useQueryClient();
    const [selectedData, setSelectedData] = useState(props.checkList);
    const index = props.index;

    useEffect(() => {
        setSelectedData(props.checkList);
    }, [props.checkList]);

    const prefNameList: prefecture[] | undefined = queryClient.getQueryData([
        'prefectures',
    ]);
    if (prefNameList === undefined) {
        return <span>Loading...</span>;
    }

    const chartData = dataConvert(selectedData, queryClient, index);

    const arraySelected = [...selectedData];

    if (chartData === undefined) {
        return <span>instance</span>;
    }
    return (
        <div className="container">
            <LineChart
                width={800}
                height={500}
                margin={{
                    top: 30,
                    right: 30,
                    left: 30,
                    bottom: 30,
                }}
                data={chartData.convertData}
            >
                <CartesianGrid strokeDasharray={'3 3'} />
                <XAxis
                    dataKey="year"
                    label={{
                        value: '年度',
                        position: 'bottom',
                    }}
                />
                <YAxis
                    dataKey={`${chartData.maxpref}`}
                    label={{
                        value: '人口数',
                        position: 'top',
                        offset: 10,
                    }}
                />
                {arraySelected.map((prefCode, index) => {
                    return (
                        <Line
                            type="monotone"
                            dataKey={prefCode}
                            name={prefNameList[prefCode - 1].prefName}
                            stroke={`${ColorGenerator(index)}`}
                            key={prefCode}
                        />
                    );
                })}
                <Legend verticalAlign="top" />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chartgraph;
