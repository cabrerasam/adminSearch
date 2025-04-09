export const formatDate = (string) => {
  const actualDate = new Date(string)

  const months = ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

  const year = actualDate.getFullYear()
  const date = actualDate.getDate().toString().padStart(2, '0')
  const month = actualDate.getMonth()
  const hours = actualDate.getHours().toString().padStart(2, '0')
  const minutes = actualDate.getMinutes().toString().padStart(2, '0')

  return `${date}-${months[month]}-${year} - ${hours}:${minutes}`
}