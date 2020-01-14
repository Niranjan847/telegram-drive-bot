module.exports = Object.freeze({
  TOKEN: '1025390398:AAHiWRCPifucq6dmg2TbPgbIa1s8dgdAp8s',
  ARIA_SECRET: 'aeiou.123',
  ARIA_DOWNLOAD_LOCATION: '/home/bitnami/Downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1-jJBMw1J2l87uMdA1p1kCSvNmlCzYAKa',
  SUDO_USERS: [730545568],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
