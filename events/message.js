
module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    
      let prefixes = ['dj']
let prefix = prefixes.find(p => message.content.toLowerCase().startsWith(p));
if (!prefix) return;
    

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command)
    if (cmd) cmd.run(client, message, args);
};

