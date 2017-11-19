import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TwitchResponse} from '../model/twitch-response';

@Injectable()
export class TwitchService {

  public moderators: string[] = [];
  public staff: string[] = [];
  public admins: string[] = [];
  public viewers: string[] = [];
  public currentViewers: number = 0;
  public loading: boolean = false;

  constructor(private http: HttpClient) {
  }

  public getLists(channelName: string): void {
    this.loading = true;
    this.http.get<TwitchResponse>('https://tmi.twitch.tv/group/user/' + channelName + '/chatters')
      .subscribe((data: TwitchResponse) => {
        this.moderators = data.chatters.moderators;
        this.staff = data.chatters.staff;
        this.admins = data.chatters.admins;
        this.viewers = data.chatters.viewers;
        this.currentViewers = data.chatter_count;
        this.loading = false;
      });
  }

}
