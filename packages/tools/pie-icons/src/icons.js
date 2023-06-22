import Icon from './icon';
import icons from '../dist/icons.json'; // eslint-disable-line import/no-unresolved

export default Object.keys(icons)
    .map((key) => new Icon(key, icons[key].contents, icons[key].attrs, icons[key].pathPrefix))
    .reduce((object, icon) => {
        object[icon.name] = icon;
        return object;
    }, {});
