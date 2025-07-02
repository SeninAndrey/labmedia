module.exports = {
    plugins: [
      require('autoprefixer')({
        flexbox: 'no-2009', // Добавит -ms-flexbox для IE 10-11, но не -webkit-box (он почти не нужен)
        grid: 'autoplace', // Добавит префиксы для CSS Grid в IE 10-11
      })
    ]
  };
