import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer l2cmhf2ezRl6ZhcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDliszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx',
  },
});
