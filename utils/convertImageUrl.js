const imageUrlConverter = (link, article) => { 
  const regex = /!\[\]\(.\//gm;
  const segment = link.split('/')
  let lastSegment = segment[segment.length - 1]
  lastSegment = lastSegment.replace('.', '\.')
  const baseUrl = link.replace(new RegExp(lastSegment + '$'), '')
  const url = article.data.value.replaceAll(regex, `![](${baseUrl}`)
  const temp = article.data.value.replaceAll(/\((.*?)\)/gm, (text) => {
    text = text.replace('(', '').replace(')', '').replace('./', '')
    text = `(${baseUrl}${text})`
    const final = text.replace(' ', '%20')
    return final
  })

  return temp
}

export default {
  imageUrlConverter
}  