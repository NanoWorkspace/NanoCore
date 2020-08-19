import Discord from "discord.js"
import Globals from "../app/Globals"

module.exports = (member: Discord.GuildMember) => {
  const roleList = Globals.db.get(
    member.guild.id,
    "autoRoles." + (member.user.bot ? "bot" : "user")
  ) as string[]
  if (roleList.length > 0) {
    member.roles.add(roleList).catch(console.error)
  }
}