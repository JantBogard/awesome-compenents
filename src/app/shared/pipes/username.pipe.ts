import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {
  transform(value: { lastName: string, firstName: string }, locale: 'en' | 'fr' = 'fr'): string {
    value.firstName = `${value.firstName.charAt(0).toUpperCase()}${value.firstName.slice(1).toLowerCase()}`;
    return locale === 'fr' ? `${value.lastName.toUpperCase()} ${value.firstName}` : `${value.firstName} ${value.lastName.toUpperCase()}`;
  }
}
