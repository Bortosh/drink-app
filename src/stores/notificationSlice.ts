import { StateCreator } from 'zustand'
import { FavoritesSliceType } from './favoritesSlice'

type Notification = {
    text: string
    show: boolean
    error: boolean
}

export type NotificationSliceType = {
    notificacion: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotification: () => void
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notificacion: {
        text: '',
        show: false,
        error: false
    },
    showNotification: (payload) => {
        set({
            notificacion: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        
        setTimeout(() => {
            get().hideNotification()
        }, 5000)

    },
    hideNotification: () => {
        set({
            notificacion: {
                text: '',
                show: false,
                error: false
            }
        })
    }
})
