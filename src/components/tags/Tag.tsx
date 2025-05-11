import { TagContainer, TagContent } from './TagsStyles'

type TagProps = {
  children: string
}

const Tag = ({ children }: TagProps) => {
  return (
    <TagContainer>
      <TagContent>{children}</TagContent>
    </TagContainer>
  )
}

export default Tag
