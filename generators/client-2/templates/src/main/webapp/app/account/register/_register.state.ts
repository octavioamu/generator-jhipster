RegisterStateConfig.$inject = ['$stateProvider'];

export function RegisterStateConfig($stateProvider) {
    $stateProvider.state('register', {
        parent: 'account',
        url: '/register',
        data: {
            authorities: [],
            pageTitle: 'register.title'
        },
        views: {
            'content@': {
                template: '<<%=jhiPrefix%>-register></<%=jhiPrefix%>-register>'
            }
        },
        resolve: {
            translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                $translatePartialLoader.addPart('register');
                return $translate.refresh();
            }]
        }
    });
}