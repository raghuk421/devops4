import * as React from 'react';
import styles from './Devops4Demo.module.scss';
import { IDevops4DemoProps } from './IDevops4DemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Devops4Demo extends React.Component<IDevops4DemoProps, {}> {
  public render(): React.ReactElement<IDevops4DemoProps> {
    return (
      <div className={ styles.devops4Demo }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint! 2</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
