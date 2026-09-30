import { menu } from './menu.constant'

const source = {
  sourceLabel: 'Menu photographs supplied by client',
  sourceUrl: null,
  checkedAt: '2026-09-30',
}

const sections = Object.entries(menu)
  .filter(([key]) => key !== 'christmasSpecial')
  .map(([key, section]) => {
    const groups = section.groups ?? [{ title: section.title, items: section.items ?? [] }]
    if (section.sides) groups.push({ title: 'Sides', items: section.sides })
    if (section.addOns) groups.push({ title: 'Add-ons', items: section.addOns })
    const items = groups.flatMap(group => group.items.map(item => ({
      ...source,
      ...item,
      category: section.title,
      subcategory: group.title === section.title ? null : group.title,
    })))

    return { id: key, title: section.title, items, note: section.note, groups }
  })

export const menuSections = sections
export const menuItems = sections.flatMap(section => section.items)
