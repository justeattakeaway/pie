import Icon from './icon';
import icons from '../dist/icons.json';

export default Object.keys(icons)
  .map(key => new Icon(key, icons[key].contents, icons[key].attrs))
  .reduce((object, icon) => {
      object[icon.name] = icon;
      return object;
  }, {});
