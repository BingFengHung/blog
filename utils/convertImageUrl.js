const imageUrlConverter = (link, article) => { 
  const regex = /!\[\]\(.\//gm;
  const segment = link.split('/')
  let lastSegment = segment[segment.length - 1]
  lastSegment = lastSegment.replace('.', '\.')
  const baseUrl = link.substr(0, link.lastIndexOf(lastSegment))
  const temp = article.data.value.replaceAll(/!\[\]\((.*?)\)/gm, (text) => {
    return text.replace(/\((.*?)\)/gm, (text) => {
      text = text.substring(1, text.length - 1).replace('./', '')
      text = `(${baseUrl}${text})`
      const final = text.replaceAll(' ', '%20')
      return final
    })
  })

  return temp
}

export default {
  imageUrlConverter
}  