export const formatDuration = (seconds: number): string => {
  const minute = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(minute).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}
