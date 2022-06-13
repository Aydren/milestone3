function BarChart() {
  const [dataChart, setDataChart] = useState({
    labels: dataChart.map(month => month.date.getMonth()),
    datasets: [
      {
        label: "Amount Spent",
        data: dataChart.map(paid => paid.spent),
      },
    ],
  });

  useEffect(() => {
    fetch("/finTrack/statement")
      .then(res => res.json())
      .then(statmentData => {
        setDataChart(statmentData);
      })
      .catch(err => {
        console.log("did not fetch statements", err);
      });
  }, []);

  let dataBar = () => {
    return <Bar data={dataChart} />;
  };

  return <div>{dataBar}</div>;
}

export default BarChart;
