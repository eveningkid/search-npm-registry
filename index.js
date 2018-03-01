const got = require('got');
const registryUrl = require('registry-url');

class SearchNpmRegistry {
  constructor(options = {}) {
    this.options = Object.assign({
      text: '',
      size: 20,
      from: 0,
      quality: 1.0,
      popularity: 1.0,
      maintenance: 1.0,
    }, options);
  }

  set(option, value) {
    this.options[option] = value;
    return this;
  }

  text(text) {
    return this.set('text', text);
  }

  size(size) {
    return this.set('size', size);
  }

  from(from) {
    return this.set('from', from);
  }

  quality(quality) {
    return this.set('quality', quality);
  }

  popularity(popularity) {
    return this.set('popularity', popularity);
  }

  maintenance(maintenance) {
    return this.set('maintenance', maintenance);
  }

  search() {
    const url = registryUrl() + '-/v1/search?'
      + 'text=' + this.options.text
      + '&size=' + this.options.size
      + '&from=' + this.options.from
      + '&quality=' + this.options.quality
      + '&popularity=' + this.options.popularity
      + '&maintenance=' + this.options.maintenance;

  	return got(url, { json: true })
      .then((response) => response.body)
      .then((data) => data.objects.map((object) => object.package));
  }
}

module.exports = function exportedSearchNpmRegistry(options) {
  return new SearchNpmRegistry(options);
};
