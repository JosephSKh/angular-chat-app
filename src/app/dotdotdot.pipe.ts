import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dotdotdot',
    standalone: true
})

export class DotDotDotPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value + ' ...';
    }
}