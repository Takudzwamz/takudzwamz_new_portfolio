import { Pipe, PipeTransform } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

@Pipe({
  name: 'toHtml'
})
export class ToHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return documentToHtmlString(value as Document);
  }

}
