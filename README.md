# Observables

* Envuelven una fuente de eventos.
* Implementándose según patrón => Observable - Observer.
* Óptimo para tratar tareas asincrónicas.
* Posibilidad de poder brindar datos, errores o completar el obj según el paquete de datos que reciba el observer.
* Uso de subscribe()

***Los observables son construcciones a las que subscribirnos para estar informado sobre los cambios en los datos*** 

# 

ngOnDestroy()

* Evitar pérdidas de memoria al no mantener suscripciones antiguas.
* No es necesario darse de baja manualmente.
