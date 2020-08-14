# Footy Stats!

![Footy Stats](./src/images/footy-stats.png)

A football stats app built with some open source tools:

- [ReactJS](react-js)
- [Football Data API](footy-api)
- Football Icon from [Flaticon](footy-icon)


## Deploy to gh-pages

- `yarn add --dev gh-pages`
- Add url to `package.json`: `http://wmucheru.github.io/footy-stats`
- Add the following lines to scripts: 
    - `"predeploy": "yarn build"`,
    - `"deploy": "gh-pages -d build"`
- `yarn build`
- `yarn run deploy`

Inspired by [FootyStats.org](footy-stats)

[react-js]: https://reactjs.org/
[footy-api]: http://www.football-data.org/
[footy-icon]: https://www.flaticon.com/free-icon/soccer_350410#term=footbal&page=1&position=65
[footy-stats]: https://footystats.org/