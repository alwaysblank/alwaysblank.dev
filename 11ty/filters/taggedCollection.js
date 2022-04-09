module.exports = conf => {
  conf.addFilter('tagged_collection', (all, tags) => {
    return all.filter(item => {
      const itemTags = item.data.tags;
      if (!itemTags) {
        // Without tags, it can't possibly belong to a tagged collection.
        return false
      }
      const intersection = tags.filter(t => itemTags.includes(t))
      return intersection.length > 0;
    })
  })
}
