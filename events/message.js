const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://GentleScreamer:Piku2007@cluster0.wofjo.mongodb.net/mythical?retryWrites=true&w=majority");  

module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    
      let prefixes = await db.fetch(`prefix_${message.guild.id}`)
      if(!prefixes) prefixes = ['gg'];
      
let prefix = prefixes.find(p => message.content.toLowerCase().startsWith(p));
if (!prefix) return;
    

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command)
    if (cmd) cmd.run(client, message, args);
};

