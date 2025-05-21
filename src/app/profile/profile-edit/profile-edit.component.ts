import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

export enum Gender {
  Male = 'male',
  Female = 'female',
  Others = 'others',
}

import { IProfile } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit, OnChanges {
  @Input() profile!: IProfile | null;
  @Output() onProfileUpdate = new EventEmitter<IProfile>();

  // custom Validation pending for gender
  allowedGenders: string[] = [Gender.Male, Gender.Female, Gender.Others];
  editForm!: FormGroup;

  get firstNameField(): AbstractControl {
    return this.editForm.get('firstName')!;
  }

  get lastNameField(): AbstractControl {
    return this.editForm.get('lastName')!;
  }

  get emailIdField(): AbstractControl {
    return this.editForm.get('emailId')!;
  }

  get ageField(): AbstractControl {
    return this.editForm.get('age')!;
  }

  get genderField(): AbstractControl {
    return this.editForm.get('gender')!;
  }

  get aboutField(): AbstractControl {
    return this.editForm.get('about')!;
  }

  get profileIconUrlField(): AbstractControl {
    return this.editForm.get('profileIconUrl')!;
  }

  get skillsField(): AbstractControl {
    return this.editForm.get('skills')!;
  }

  showFieldError(field: AbstractControl): boolean {
    return (field?.touched || field?.dirty) && !field?.valid;
  }

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['profile'].currentValue) {
      this.editForm?.patchValue({
        firstName: this.profile?.firstName,
        lastName: this.profile?.lastName,
        emailId: this.profile?.emailId,
        age: this.profile?.age,
        gender: this.profile?.gender,
        about: this.profile?.about,
        profileIconUrl: this.profile?.profileIconUrl,
        skills: this.profile?.skills,
      });
    }
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      emailId: this.fb.control('', [Validators.required, Validators.email]),
      age: this.fb.control('', [Validators.min(18)]),
      gender: this.fb.control('', [Validators.required]),
      about: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(100),
      ]),
      profileIconUrl: this.fb.control('', [Validators.required]),
      skills: this.fb.array([''], [Validators.maxLength(10)]),
    });

    this.editForm.valueChanges.subscribe((newValue) =>
      this.onProfileUpdate.emit(newValue)
    );
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      console.log('Edit form values: ', this.editForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
