import { Routes } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';
import { NotFoud } from './components/not-foud/not-foud';
import { Photos } from './components/photos/photos';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: 'photos',
        component: Photos
    },
    {
        path: 'attribute',
        component: Attribute
    },
    {
        // Wild card Route : use always in end
        path: "**",
        component: NotFoud
    }
];
