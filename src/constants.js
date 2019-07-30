const profileName = 'lasercut-acrylic-16th'
const profiles = {
  'lasercut-acrylic-16th': require('./profiles/lasercut-acrylic-16th'),
}

const profile = profiles[profileName]

const constants = {
  cardWidth: 350,
  cardHeight: 500,
  cardCornerRadius: 7.2,
  ...profile,
}

export default constants
