const truncateSubtitle = (subtitle = '') => subtitle.length > 50 ? `${subtitle.slice(0, 50)}...` : subtitle

export default { truncateSubtitle }