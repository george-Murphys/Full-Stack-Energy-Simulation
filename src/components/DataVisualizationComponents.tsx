import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveCalendar } from '@nivo/calendar';
import { 
  Paper, 
  Grid, 
  Typography, 
  Box,
  Card,
  CardContent,
  useTheme
} from '@mui/material';

interface DataVisualizationComponentsProps {
  data: any;
  parameter: any;
}

export function BarChart({ data }: DataVisualizationComponentsProps) {
  const theme = useTheme();

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Bar Chart
        </Typography>
        <Box sx={{ height: 400 }}>
          <ResponsiveBar
            data={data}
            keys={['value']}
            indexBy="date"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            colors={{ scheme: 'nivo' }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: theme.palette.text.primary
                  }
                },
                legend: {
                  text: {
                    fill: theme.palette.text.primary
                  }
                }
              },
              legends: {
                text: {
                  fill: theme.palette.text.primary
                }
              }
            }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              legend: 'Date',
              legendPosition: 'middle',
              legendOffset: 40
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Value',
              legendPosition: 'middle',
              legendOffset: -40
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export function Calendar({ data }: DataVisualizationComponentsProps) {
  const theme = useTheme();
  const calendarData = data.map((item: any) => ({
    day: item.date,
    value: item.value
  }));

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Calendar View
        </Typography>
        <Box sx={{ height: 400 }}>
          <ResponsiveCalendar
            data={calendarData}
            from={new Date(calendarData[0]?.day).toISOString()}
            to={new Date(calendarData[calendarData.length - 1]?.day).toISOString()}
            emptyColor="#eeeeee"
            colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor={theme.palette.background.paper}
            dayBorderWidth={2}
            dayBorderColor={theme.palette.background.paper}
            theme={{
              text: {
                fill: theme.palette.text.primary
              }
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export function LineChart({ data }: DataVisualizationComponentsProps) {
  const theme = useTheme();
  const lineData = [
    {
      id: "values",
      data: data.map((item: any) => ({
        x: item.date,
        y: item.value
      }))
    }
  ];

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Line Chart
        </Typography>
        <Box sx={{ height: 400 }}>
          <ResponsiveLine
            data={lineData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d',
              useUTC: false,
              precision: 'day'
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: false
            }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: theme.palette.text.primary
                  }
                },
                legend: {
                  text: {
                    fill: theme.palette.text.primary
                  }
                }
              },
              legends: {
                text: {
                  fill: theme.palette.text.primary
                }
              }
            }}
            axisBottom={{
              format: '%b %d',
              tickRotation: -45,
              legend: 'Date',
              legendOffset: 36,
              legendPosition: 'middle'
            }}
            axisLeft={{
              legend: 'Value',
              legendOffset: -40,
              legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)'
              }
            ]}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export class DataVisualizationComponents extends React.Component<DataVisualizationComponentsProps> {
  render() {
    const { data, parameter } = this.props;

    return (
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Data Visualization
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BarChart data={data} parameter={parameter}/>
          </Grid>
          <Grid item xs={12}>
            <Calendar data={data} parameter={parameter}/>
          </Grid>
          <Grid item xs={12}>
            <LineChart data={data} parameter={parameter} />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default DataVisualizationComponents;
