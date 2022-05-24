import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skill: Skills [];
  public editSkill!: Skills;
  public deleteSkill!: Skills;


  constructor(private skillsService: SkillsService) { 
    this.skill = [];

  }

  ngOnInit() {
    this.getSkills();
  }


  public getSkills(): void {
    this.skillsService.getSkills().subscribe(
      (response: Skills[]) => {
        this.skill = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddSkill (addForm: NgForm): void {
    document.getElementById('add-skill-modal')?.click();
    this.skillsService.addSkill(addForm.value).subscribe(
      (response: Skills) => {
        console.log(response);
        this.getSkills;
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset()
      },
    )
  }

  public onUpdateSkill (skill: Skills): void {
    this.skillsService.updateSkill(skill).subscribe(
      (response: Skills) => {
        console.log(response);
        this.getSkills;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }
  

  public onDeleteSkill (skillId: number): void {
    this.skillsService.deleteSkill(skillId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSkills;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
  }
  public onOpenModal(skill: Skills, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSkillModal');
    }
    if (mode === 'edit') {
      this.editSkill = skill;
      button.setAttribute('data-target', '#updateSkillModal');
    }
    if (mode === 'delete') {
      this.deleteSkill = skill;
      button.setAttribute('data-target', '#deleteSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
