import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllBlogIds(){
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return{
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getBlogData(id){
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

console.log(matterResult.data)
  return {
    id,
    ...matterResult.data
  }
}

export function getSortedBlogsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allBlogsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
