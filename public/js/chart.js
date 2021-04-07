const getChartData = async () => {
    //event.preventDefault();
    const cocktailData = await fetch(`/api/cocktail`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (cocktailData) {
        const cocktails = await cocktailData.json()
        //console.log(cocktails);


        const cocktailChartData = [];
        cocktails.forEach(cocktail => {
            let cocktailInfo = [];
            cocktailInfo.push(cocktail.cocktail_name, cocktail.rating_average)
            cocktailChartData.push(cocktailInfo)
            //console.log(cocktailInfo)
        });
        //console.log(cocktailChartData);

        var chart = await bb.generate({
            bindto: "#chart",
            data: {
                columns: cocktailChartData,
                type: "bar",
            }
        });

    }

}

getChartData();