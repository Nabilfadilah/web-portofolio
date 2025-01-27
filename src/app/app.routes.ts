import { Routes } from '@angular/router';
import { WebComponent } from './template/web/web.component';
import { AdminComponent } from './template/admin/admin.component';

// tempat ganti halaman page
export const routes: Routes = [
    {
        path: '',
        component: WebComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        // children: [
        //     {
        //         path: 'dashboard',
        //         children: [
        //             {

        //             }
        //         ]
        //     }
        // ]
    }
];
