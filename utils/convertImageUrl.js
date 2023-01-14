const imageUrlConverter = (link, article) => { 
  console.log(article)
  const regex = /!\[\]\(.\//gm;
  const segment = link.split('/')
  let lastSegment = segment[segment.length - 1]
  lastSegment = lastSegment.replace('.', '\.')
  const baseUrl = link.replace(new RegExp(lastSegment + '$'), '')
  const temp = article.data.value.replaceAll(/!\[\]\((.*?)\)/gm, (text) => {
    return text.replace(/\((.*?)\)/gm, (text) => {
      text = text.replace('(', '').replace(')', '').replace('./', '')
      text = `(${baseUrl}${text})`
      const final = text.replace(' ', '%20')
      return final
    })
  })
  console.log(temp)

  return temp
}

export default {
  imageUrlConverter
}  