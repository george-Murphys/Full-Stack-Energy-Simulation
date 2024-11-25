import React from 'react';

interface DataVisualizationComponentsProps {
  data: any; // Define the type of data you're expecting
  parameter:any;
}

// BarChart functional component
export function BarChart({ data }: DataVisualizationComponentsProps) {
  return (
    <div>
      <h3>Bar Chart</h3>
      {/* Add chart rendering logic here using `data` */}
      {JSON.stringify(data)}
    </div>
  );
}

// TableView functional component
export function TableView({ data }: DataVisualizationComponentsProps) {
  return (
    <div>
      <h3>Table View</h3>
      {/* Add table rendering logic here using `data` */}
      <table>
        <thead>
          <tr>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{JSON.stringify(data)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// LineChart functional component
export function LineChart({ data }: DataVisualizationComponentsProps) {
  return (
    <div>
      <h3>Line Chart</h3>
      {/* Add chart rendering logic here using `data` */}
      {JSON.stringify(data)}
    </div>
  );
}

// Main component to wrap the different charts
export class DataVisualizationComponents extends React.Component<DataVisualizationComponentsProps> {
  render() {
    const { data } = this.props;
    const { parameter } = this.props;

    return (
      <div>
        <h2>Data Visualization</h2>
        <BarChart data={data} parameter={parameter}/>
        <TableView data={data} parameter={parameter}/>
        <LineChart data={data} parameter={parameter} />
      </div>
    );
  }
}

export default DataVisualizationComponents;