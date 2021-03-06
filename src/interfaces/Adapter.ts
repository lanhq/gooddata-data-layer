import { AFM } from '@gooddata/typings';
import { IDataSource } from './DataSource';
import { IDataSourceParams } from './DataSourceParams';

export interface IAdapter<T> {
    createDataSource(source: AFM.IAfm | IDataSourceParams): Promise<IDataSource<T>>;
}
