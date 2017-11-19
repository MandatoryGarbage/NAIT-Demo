import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TwitchService} from './service/twitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  moderatorTitle: string = 'Moderators';
  staffTitle: string = 'Staff';
  adminTitle: string = 'Admins';
  viewerTitle: string = 'Viewers';

  constructor(private formBuilder: FormBuilder, public twitchService: TwitchService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      channelName: [''],
      currentViewers: []
    });
  }

  public getTwitchData(): void {
    this.twitchService.getLists(this.form.get('channelName').value);
    this.form.get('currentViewers').setValue(this.twitchService.viewers.length);
  }
}
