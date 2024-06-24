const imageUrlConverter = (link, article) => { 
  const baseUrl = urlResolve(`${link}`)
  let raw = article.data.value;

  const temp = raw.replaceAll(/!\[\]\((.*?)\)/gm, (text) => {
    return text.replace(/\((.*?)\)/gm, (text) => {
      text = text.substring(1, text.length - 1).replace('./', '')
      text = `(${baseUrl}${text})`
      return text.replaceAll(' ', '%20')
    })
  })
  
  var regex = /src="images\/(.*?)"/g;
  const timestamp = "\?ts=\<\?= time\(\) \?\>";
  var replacement = `src="${baseUrl}images/$1"`;
  return temp.replaceAll(regex, replacement)
}

const urlResolve = (link) => {
  const segment = link.split('/')
  let lastSegment = segment[segment.length - 1]
  lastSegment = lastSegment.replace('.', '\.')
  return link.substr(0, link.lastIndexOf(lastSegment))
}

const imgUrlConverter = (link, article) => {
  const baseUrl = urlResolve(link);
  const regex = /src="(images\/.*)"/g;
  return article.replaceAll(regex, `src="${baseUrl}$1`)
};

export default {
  imageUrlConverter, 
}  