export class Chatters {
  moderators: string[] = [];
  staff: string[] = [];
  admins: string[] = [];
  global_mods: string[] = [];
  viewers: string[] = [];
}

export class TwitchResponse {
  chatter_count: number = 0;
  chatters: Chatters = new Chatters();
}
