import React from 'react';
import GlassCard from '../ui/glasscard';
import { ResponsiveRadar } from '@nivo/radar';

const data = [
    {
        taste: "fruity",
        chardonay: 73,
        carmenere: 53,
        syrah: 48,
        liquid: 100,
    },
    {
        taste: "bitter",
        chardonay: 76,
        carmenere: 87,
        syrah: 83,
        liquid: 100,
    },
    {
        taste: "heavy",
        chardonay: 53,
        carmenere: 39,
        syrah: 35,
        liquid: 100,
    },
    {
        taste: "strong",
        chardonay: 66,
        carmenere: 42,
        syrah: 112,
        liquid: 100,
    },
    {
        taste: "sunny",
        chardonay: 102,
        carmenere: 88,
        syrah: 117,
        liquid: 100,
    },
];

const Radar = ({ chartData = data }: { chartData?: typeof data }) => {
    const keys = ['chardonay', 'carmenere', 'syrah', 'liquid'];
    const indexBy = 'taste';

    return (
        <GlassCard className="h-72 w-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mb-2">Working</h1>
            <div className="w-full h-64"> 
                <ResponsiveRadar
                    data={chartData}
                    keys={keys}
                    indexBy={indexBy}
                    maxValue="auto"
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: 'color' }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={8}
                    dotColor={{ from: 'color' }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
                    enableDotLabel={false}
                    colors={{ scheme: 'set2' }}
                    fillOpacity={0.4}
                    blendMode="multiply"
                    animate={true}
                    isInteractive={true}
                    theme={{
                        axis: {
                            domain: {
                                line: {
                                    stroke: '#ffffff',
                                },
                            },
                            ticks: {
                                line: {
                                    stroke: '#ffffff',
                                    strokeWidth: 1,
                                },
                                text: {
                                    fill: '#ffffff', // ✅ label color
                                },
                            },
                            legend: {
                                text: {
                                    fill: '#ffffff',
                                },
                            },
                        },
                        grid: {
                            line: {
                                stroke: '#444',
                                strokeWidth: 1,
                            },
                        },
                        tooltip: {
                            container: {
                                background: '#000000',
                                color: '#ffffff',
                                borderRadius: '4px',
                                padding: '8px 12px',
                            },
                        },
                    }}
                />

            </div>
        </GlassCard>
    );
};

export default Radar;
