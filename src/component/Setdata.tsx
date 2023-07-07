import { useQuery, useQueries } from '@tanstack/react-query';
import axios from 'axios';
import { prefecture, populationData } from '../types';
import { Prefecture } from './Prefecture';

type RESASPrefectureResponse = {
    data: {
        result: prefecture[];
    };
};

type RESASPopulationResponse = {
    data: {
        boundaryYear?: number;
        result: populationData[];
    };
};

const getPrefecture = async () => {
    const headers = {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
    };
    const resp: RESASPrefectureResponse = await axios.get(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
            headers,
        }
    );
    return resp.data.result;
};

const getPopulation = async (prefCode: number) => {
    const headers = {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
    };
    const resp: RESASPopulationResponse = await axios.get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`,
        {
            headers,
        }
    );
    return resp.data.result;
};

export const Setdata = () => {
    useQuery({
        queryKey: ['prefectures'],
        queryFn: getPrefecture,
        cacheTime: Infinity,
        staleTime: Infinity,
    });
    useQueries({
        queries: [
            {
                queryKey: ['population', 1],
                queryFn: async () => await getPopulation(1),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 2],
                queryFn: async () => await getPopulation(2),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 3],
                queryFn: async () => await getPopulation(3),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 4],
                queryFn: async () => await getPopulation(4),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 5],
                queryFn: async () => await getPopulation(5),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 6],
                queryFn: async () => await getPopulation(6),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 7],
                queryFn: async () => await getPopulation(7),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 8],
                queryFn: async () => await getPopulation(8),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 9],
                queryFn: async () => await getPopulation(9),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 10],
                queryFn: async () => await getPopulation(10),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 11],
                queryFn: async () => await getPopulation(11),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 12],
                queryFn: async () => await getPopulation(12),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 13],
                queryFn: async () => await getPopulation(13),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 14],
                queryFn: async () => await getPopulation(14),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 15],
                queryFn: async () => await getPopulation(15),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 16],
                queryFn: async () => await getPopulation(16),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 17],
                queryFn: async () => await getPopulation(17),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 18],
                queryFn: async () => await getPopulation(18),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 19],
                queryFn: async () => await getPopulation(19),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 20],
                queryFn: async () => await getPopulation(20),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 21],
                queryFn: async () => await getPopulation(21),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 22],
                queryFn: async () => await getPopulation(22),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 23],
                queryFn: async () => await getPopulation(23),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 24],
                queryFn: async () => await getPopulation(24),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 25],
                queryFn: async () => await getPopulation(25),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 26],
                queryFn: async () => await getPopulation(26),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 27],
                queryFn: async () => await getPopulation(27),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 28],
                queryFn: async () => await getPopulation(28),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 29],
                queryFn: async () => await getPopulation(29),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 30],
                queryFn: async () => await getPopulation(30),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 31],
                queryFn: async () => await getPopulation(31),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 32],
                queryFn: async () => await getPopulation(32),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 33],
                queryFn: async () => await getPopulation(33),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 34],
                queryFn: async () => await getPopulation(34),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 35],
                queryFn: async () => await getPopulation(35),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 36],
                queryFn: async () => await getPopulation(36),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 37],
                queryFn: async () => await getPopulation(37),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 38],
                queryFn: async () => await getPopulation(38),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 39],
                queryFn: async () => await getPopulation(39),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 40],
                queryFn: async () => await getPopulation(40),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 41],
                queryFn: async () => await getPopulation(41),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 42],
                queryFn: async () => await getPopulation(42),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 43],
                queryFn: async () => await getPopulation(43),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 44],
                queryFn: async () => await getPopulation(44),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 45],
                queryFn: async () => await getPopulation(45),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 46],
                queryFn: async () => await getPopulation(46),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
            {
                queryKey: ['population', 47],
                queryFn: async () => await getPopulation(47),
                cacheTime: Infinity,
                staleTime: Infinity,
            },
        ],
    });
    return (
        <>
            <Prefecture />
        </>
    );
};
