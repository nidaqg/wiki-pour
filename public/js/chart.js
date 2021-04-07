const getChartData = async () => {
  const cocktailData = await fetch(`/api/cocktail`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (cocktailData) {
    const cocktails = await cocktailData.json();

    const cocktailChartData = [];
    cocktails.forEach((cocktail) => {
      let cocktailInfo = [];
      cocktailInfo.push(cocktail.cocktail_name, cocktail.rating_average);
      cocktailChartData.push(cocktailInfo);
    });

    var chart = await bb.generate({
      bindto: "#chart",
      data: {
        columns: cocktailChartData,
        type: "bar",
      },
    });
  }
};

getChartData();
