import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modals: Map<string, any> = new Map();

    add(modal: any) {
        console.log('ModalService: Added', modal.id)
        this.modals.set(modal.id, modal);
    }

    remove(id: string) {
        this.modals.delete(id)
    }

    open(id: string) {
        const modal = this.modals.get(id)
        if (modal == undefined) {
            console.log('Modal', id, 'not found!')
        } else {
            modal.open();
        }
    }

    close(id: string) {
        const modal = this.modals.get(id)
        if (modal == undefined) {
            console.log('Modal', id, 'not found!')
        } else {
            modal.close();
        }
    }
}
