actions.js : Ce fichier est utilisé pour définir les actions Redux. Une action est un simple objet
JavaScript qui a une propriété type et décrit quelque chose qui se passe dans l'application (par
exemple, une action pour indiquer qu'un utilisateur a été créé). Les actions peuvent également avoir
une propriété payload qui contient des données supplémentaires (par exemple, l'utilisateur qui a été
créé). Les actions sont dispatchées par les composants ou à l'intérieur des fonctions du middleware,
et sont interceptées par les réducteurs.

reducer.js : Ce fichier est utilisé pour définir les réducteurs. Un réducteur est une fonction qui
prend l'état actuel de l'application et une action, puis renvoie un nouvel état. Les réducteurs sont
"purs", ce qui signifie qu'ils ne modifient pas l'état actuel, ils renvoient simplement un nouvel objet
d'état. En pratique, vous aurez souvent plusieurs réducteurs, chacun gérant un aspect différent de
l'état de l'application, et vous les combinerez pour former l'état global.

store.js : Ce fichier est utilisé pour créer le store Redux. Le store est l'objet qui rassemble les
actions et les réducteurs. Il fournit des méthodes pour dispatch (envoyer) les actions, et il notifie
les composants React chaque fois que l'état change afin qu'ils puissent se mettre à jour. Le store est
créé en utilisant la fonction createStore de Redux, qui prend un réducteur et éventuellement un middleware
en argument. Le middleware est utilisé pour permettre des comportements plus complexes, comme le traitement
asynchrone.

Un composant dispatche (envoie) une action.
Le middleware intercepte l'action et peut effectuer des effets de bord comme des appels API.
Les réducteurs interceptent l'action et calculent un nouvel état.
Le store met à jour l'état et informe les composants de la mise à jour.
Les composants se mettent à jour en fonction du nouvel état.