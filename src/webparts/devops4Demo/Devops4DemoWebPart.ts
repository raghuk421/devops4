import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Devops4DemoWebPartStrings';
import Devops4Demo from './components/Devops4Demo';
import { IDevops4DemoProps } from './components/IDevops4DemoProps';

export interface IDevops4DemoWebPartProps {
  description: string;
}

export default class Devops4DemoWebPart extends BaseClientSideWebPart<IDevops4DemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDevops4DemoProps > = React.createElement(
      Devops4Demo,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
