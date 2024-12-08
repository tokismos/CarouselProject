type Props = {
  title: string
  links: string[]
}

export const FooterSection = ({ title, links }: Props) => (
  <div>
    <h3 className="text-2xl mb-4 text-[#A3C6FF]">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li
          key={link}
          className="text-[#F7F8F6] hover:text-white cursor-pointer text-sm"
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
)
