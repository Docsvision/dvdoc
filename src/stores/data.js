import { uid } from 'quasar'

const versions = [
	{
		id: uid(),
		ver: 'Войдет в следующую версию',
		children: [
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [{ label: 'ERR-2514', text: 'Ошибка при обновлении ВК' }],
			},
		],
	},
	{
		ver: '5.5.5957.274',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Лист ознакомления',
						text: 'Теперь в заданиях отображается лист ознакомления с подчинёнными заданиями и группами заданий.',
						children: [],
					},
					{
						id: uid(),
						label: 'Разделители разрядов числа',
						text: 'В ЭУ Число теперь отображаются системные разделители разрядов числа.',
						children: [],
					},
					{
						id: uid(),
						label: 'Способ удаления карточек',
						text: 'Теперь при удалении карточки всегда указывается способ удаления: в корзину или безвозвратно.',
						children: [],
					},
					{
						id: uid(),
						label: 'Конструктор справочников',
						text: 'Переработан интерфейс конструктора справочников.',
						children: [],
					},
					{
						id: uid(),
						label: 'Использование облачной подписи',
						text: 'Изменён диалог подписания документов и добавлена возможность подписать карточки облачной подписью.',
						children: [],
					},
					{
						id: uid(),
						label: 'Изменился диалог подписания',
						text: 'Диалог подписания переработан, также изменился алгоритм выбора сертификатов в диалоге.',
						children: [],
					},
					{
						id: uid(),
						label: 'Управление подписанием через API',
						text: 'Добавлена возможность управления диалогом подписания через API.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Изменения в библиотеках элементов управления',
				icon: 'mdi-bookshelf',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Лист ознакомления',
						text: 'Новый элемент управления, доступный в карточках типа Документ. ЭУ добавляет возможность работы с листом согласования в карточках.',
						children: [],
					},
					{
						id: uid(),
						label: 'Контрол табличных данных',
						text: 'Элемент управления отображает данные в виде таблицы на основе программно сформированной модели.',
						children: [],
					},
					{
						id: uid(),
						label: 'Новые свойства ЭУ "Файл"',
						text: 'Для элемента управления "Файл" добавлены новые свойства: Отображать метку без значения, Сообщение при пустом значении, Доступные расширения, Показывать контекстное меню.',
						children: [],
					},
					{
						id: uid(),
						label: 'Число',
						text: 'Добавлено новое свойство Использовать системные разделители, регулирующее отображение разделителей числа. Свойство по умолчанию активно, т.е. разделители отображаются.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Оптимизации',
				icon: 'mdi-rocket-launch',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Функция "Общие справочники"',
						text: 'Теперь справочники используются в общем режиме для всех пользователей, благодаря чему сервер Docsvision использует меньше памяти.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Разработка',
				icon: 'mdi-application-braces-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Изменения в API',
						text: 'Добавлен REST Web-API, доступный на стороне клиента Web-клиента. Изменены компоненты FileSignCreateDialog, FileSignSelectCertificateDialog. Изменен сервис $DocumentCardController.',
						show: false,
						more: '<ul><li>Был добавлен REST Web-API, доступный на стороне клиента Web-клиента, который может вызывать функции Docsvision API. REST API предназначается для работы из клиентских скриптов.</li> <li>Внутренние компоненты FileSignCreateDialog, FileSignSelectCertificateDialog и связанные с ними заменены на SignatureDialog.</li> <li>Сервис $DocumentCardController заменён на $SignatureController.</li> <li>Во внутреннем классе FileSign удалена часть методов.</li></ul>',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Новые примеры в репозитории на github',
				icon: 'mdi-github',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Github',
						text: 'В репозиторий WebClient-Samples на GitHub добавлены новые примеры',
						show: false,
						more: '<ul><li>Применить группировку кнопкой в ячейке.</li> <li>Расширить контекстное меню.</li> <li>Изменение экспорта в Excel.</li> <li>Расширение серверных вызовов</li></ul>',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-2464',
						text: 'ЭУ Записи справочника сотрудников. При поиске сотрудника возникает ошибка SQLFailure.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-958',
						text: 'В превью отображается содержимое файла если у пользователя запрещено чтение файла по ролевой.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2440',
						text: 'Ломается разметка окна поиска у папки "Поиск квартальных целей".',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-896',
						text: 'Нет возможности переопределить обработчик LifeCycle в InitializeContainer серверного расширения.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2346',
						text: 'Отсутствие иконки (решения) при делегировании с возвратом.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2390',
						text: 'Комментарий от делегата отображается неправильно в ходе согласования.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2279',
						text: 'Игнорируется пропуск этапов после запуска согласования.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-0004',
						text: 'Ошибка контрола файла согласования.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2336',
						text: 'Не копируются операции при копировании разметок.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2183',
						text: 'В заданиях не отображается ссылка на основной документ если задания созданы из другого задания КС.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2281',
						text: 'Если офлайн пользователи не убираются из списка задач на пересчет в childrener-e, то у онлайн пользователей престают работать счетчики в папке.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2222',
						text: 'Текст метки ЭУ переносится на новую строку справа от метки.',
						children: [],
					},
				],
			},
		],
	},
	{
		ver: '5.5.5957.250',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Сертификат ЭП сотрудника',
						text: 'Появилась возможность добавить сертификат для пользователя в справочник сотрудников.',
						children: [],
					},

					{
						id: uid(),
						label: 'Настройка подписей в профиле пользователя',
						text: 'В профиль пользователя добавлена новая вкладка Подпись.',
						children: [],
					},

					{
						id: uid(),
						label: 'Редактирование по месту',
						text: 'Переработан режим редактирования по месту. Теперь все ЭУ в режиме редактирования по месту изменяются прямо в занимаемых областях. Маленькое всплывающее окно редактирования появляется только для ЭУ Текст.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Изменения в библиотеках элементов управления',
				icon: 'mdi-bookshelf',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Строка конструктора справочников',
						text: 'Для ЭУ "Строка конструктора справочников" добавлено новое свойство Разрешить поиск узла, добавляющее возможность поиска по узлам справочника.',
						children: [],
					},
					{
						id: uid(),
						label: 'Список файлов',
						text: 'Добавлено новое свойство, позволяющее скрыть кнопку подписи в Списке файлов, например, если в карточку добавлен ЭУ Кнопка подписания.',
						children: [],
					},
					{
						id: uid(),
						label: 'Кнопка подписания',
						text: 'Новый элемент управления, который может быть добавлен карточку типа "Документ". ЭУ представляет собой кнопку, позволяющую подписать карточку без файлов (подписать только атрибуты карточки).',
						children: [],
					},
					{
						id: uid(),
						label: 'CertificateSettings',
						text: 'Новый элемент управления, отвечающий за настройку сертификатов в профиле пользователя.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Оптимизации',
				icon: 'mdi-rocket-launch',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Консоль браузера',
						text: 'Сообщения об отмене обещания (promise) больше не выводятся в консоль браузера. При отмене события обработчиком, в консоли выводится сообщение о том, какой обработчик ответственен за отмену конкретного события.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Новые примеры в репозитории на github',
				icon: 'mdi-github',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Github',
						text: 'В репозиторий WebClient-Samples на GitHub добавлены новые примеры.',
						show: false,
						more: '<ul><li>Отобразить количество непрочитанных карточек.</li> <li>Изменить цвет строки по кнопке.</li></ul>',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-2174',
						text: 'Календарь по умолчанию не учитывается при расчёте сроков.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1630',
						text: 'Ошибочно срабатывает запрет на создания карточки при создании связанной карточки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1840',
						text: 'Не открывается xlsx файл в "ход согласования".',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1276',
						text: 'При копировании разметки в другое решение частично сбрасываются операции редактирования.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1757',
						text: 'Ошибка при поиске сотрудника в контроле StaffDirectoryItems, если в имени организации присутствует символ &.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1857',
						text: 'Не добавляются старые групповые операции в новый грид.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2094',
						text: 'Не отображается архивное задание в таблице исполнения карточки документа.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2111',
						text: 'Нет возможности пропускать все внешние ресурсы при конвертации файлов при предпросмотре.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2102',
						text: 'IFileConvertationService должен поддерживать использование клиентских конвертеров.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2060',
						text: 'В справочнике сотрудников не отображаются колонки ФИО, Фамилия, Имя, Отчество.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2095',
						text: 'Корень WebFrame. Не работает условие роли для отображения разметки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2030',
						text: 'Uncaught TypeError: Cannot read properties of null (reading "textContent") при наличии файла, недоступного для предпросмотра среди основных файлов в задании на согласование.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1829',
						text: 'Не отображается задание в таблице исполнения документа, если документ добавлен в архив.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2086',
						text: 'Предпросмотр разных версий файла в FileChildren показывает только первую версию документа.',
						children: [],
					},
				],
			},
		],
	},
	{
		ver: '5.5.5957.226',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Иконки',
						text: 'Добавлен ряд иконок.',
						show: false,
						more: 'Для следующих элементов управления добавлены иконки: <ul><li>Записи справочника сотрудников,</li> <li>Партнер,</li> <li>Подразделение контрагента,</li> <li>Дата/время,</li> <li>Строка конструктора справочников,</li> <li>Нумератор,</li> <li>Дело,</li></ul> Наличие или отсутствие иконки у этих ЭУ регулируется свойством Показывать иконку. Иконки отображаются во всех режимах разметок.',
						children: [],
					},
					{
						id: uid(),
						label: 'Редактирование разметки WebFrame',
						text: 'Теперь редактирование разметки WebFrame включено по умолчанию и больше не является экспериментальной функцией.',
						children: [],
					},
					{
						id: uid(),
						label: 'Опрос по работе Web-клиента',
						text: 'Теперь через три месяца использования после обновления предлагается пройти опрос по работе с Web-клиентом.',
						children: [],
					},
					{
						id: uid(),
						label: 'Фильтрация по вычисляемым столбцам',
						text: 'Фильтрация по вычисляемым столбцам теперь доступна во всех представлениях.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Изменения в библиотеках элементов управления',
				icon: 'mdi-bookshelf',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Изменения разметки WebFrame',
						text: 'Добавлен ряд свойств для элементов разметки.',
						show: false,
						more: '<ul><li>Для ЭУ Контейнер заголовка Панель навигации добавлено свойство Видимость, позволяющее скрыть ЭУ.</li> <li>Для элемента Контейнер заголовка также добавлено свойство Высота в пикселях, позволяющее указать высоту элемента управления</li> <li>Для ЭУ layouts:page$ctrl/webFrame/webFrameContent.adoc#bg добавлено свойство, позволяющее задать фон для главной страницы и/или папок.</li> <li>Фон также можно задать в локациях Папка, Последние карточки, Результаты поиска, Главная страница в свойстве Фон для элемента разметки root.</li> <li>Для ЭУ Логотип компании добавлено новое свойство Видимость, позволяющее скрыть ЭУ.</li> <li>Также добавлено свойство Отображаться всегда, позволяющее отображать ЭУ всегда.</li></ul> Разметка WebFrame доступна для редактирования всегда с некоторыми ограничениями.',
						children: [],
					},
					{
						id: uid(),
						label: 'Свойство "Тег" для элементов управления',
						text: 'Для каждого ЭУ добавлено новое свойство Tag / Тег. Тег — простое текстовое свойство, позволяющее добавить скрипт для ЭУ в программе Конструктор Web-разметок.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-2085',
						text: 'Старый грид. Не работает настройка группировки представления "показывать раскрытой".',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2028',
						text: 'Текст одного сотрудника накладывается на текст другого при настройке этапа согласование, если настроено собственное отображение сотрудников.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2073',
						text: 'Неверная сортировка папок в боковом меню. Папки с вложениями имеют приоритет при сортировке.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2036',
						text: 'Не происходит выравнивание текста по правому краю.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-2003',
						text: 'В этапе невозможно изменять параметры если согласующие вычисляются через бизнес-процесс..',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1997',
						text: 'В созданных вручную этапах нет возможности выполнять подписание простой подписью.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1829',
						text: 'Не отображается содержимое вкладки "Исполнение" в карточке резолюции после архивирования карточки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1842',
						text: 'Не работает группировка в новом гриде для числовых колонок.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1880',
						text: 'В контроле StaffDirectoryItems не очищается предыдущее значение.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1863',
						text: 'Не сохраняются данные элемента управления Записи справочника сотрудников, если несколько элементов данного типа были связаны с одной секцией карточки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1804',
						text: 'Сортировка файлов из нескольких источников в пределах одной веб-страницы.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1808',
						text: 'В событии cardSaved не передаются bindings.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1630',
						text: 'Запрет создания карточки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1572',
						text: 'Изменение формата даты в виджете последних карточек.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1566',
						text: 'Ошибка при генерации номера документа : Internal Server Error.',
						children: [],
					},
				],
			},
		],
	},
	{
		ver: '5.5.5957.195',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Свойство прозрачность',
						text: 'Для ряда ЭУ добавлено свойство прозрачность',
						show: false,
						more: 'Для следующих ЭУ добавлено свойство прозрачность: <ul> <li>Виджет / Карточки папки</li> <li>Виджет / Последние карточки</li> <li>Виджет / Группа папок</li> <li>Виджет / Известная папка</li></ul> Высота виджетов регулируется высотой ЭУ Блок.',
						children: [],
					},
					{
						id: uid(),
						label: 'Использовать REST всегда',
						text: 'Упразднена возможность переключения транспорта с REST на COM. Теперь всегда используется REST.',
						children: [],
					},
					{
						id: uid(),
						label: 'Автоматическое резервное копирование',
						text: 'Теперь при обновлении происходит автоматическое резервное копирование файлов WebClient.xml WebClientServerExtension.xml, если при обновлении включен соответствующий флаг.',
						children: [],
					},
					{
						id: uid(),
						label: 'Сохранение результатов полнотекстового поиска',
						text: 'Результаты полнотекстового поиска теперь сохраняются при обновлении страницы представления.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-1795',
						text: 'При редактировании через WebDav временный файл пишется прямо на диск C..',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1694',
						text: 'FilePicker. Есть возможность удалить файл даже если установлен режим редактирования "Без редактирования".',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1639',
						text: 'Ошибка internal Server Error при отмене создания задания на исполнение.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1673',
						text: 'В окне параметров поиска в поле текущее время отображается время разметки из кэша.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1682',
						text: 'В историю добавляется запись об изменении значения в контроле Dropdown при сохранении карточки, тогда как фактически значение не менялось..',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1746',
						text: 'Форма просмотра. Отображение флагов не отцентрировано по метке..',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1050',
						text: 'Ошибка при открытии модального окна настройки прав доступа в справочнике сотрудников.',
						children: [],
					},
					{
						id: uid(),
						label: 'WebC-10823',
						text: '"Режим отложенных изменений уже включен." при установке флага.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1669',
						text: 'Не добавляется ссылка на файл в контроле PartnersDepartment.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1360',
						text: 'после удаления ссылки и последующем выборе "пустой ссылки" добавляется значение удаленной ссылки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1532',
						text: 'Отключенные папки из боковой панели продолжают отображаться в панели после обновления страницы.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1352',
						text: 'ЭП накладывается вертикально.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1051',
						text: 'Ошибка при открытии модального окна настройки прав доступа в справочнике сотрудников.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1529',
						text: 'Ошибка при попытке добавления файла через контрол FilePicker.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1260',
						text: 'Нельзя создать сотрудника или отредактировать поля у уже созданного в Справочнике сотрудников.',
						children: [],
					},
				],
			},
		],
	},
	{
		ver: '5.5.5957.174',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Вывод краткой информации о сотруднике',
						text: 'Теперь посмотреть краткую информацию о сотруднике можно прямо из элемента управления, см. подробнее.',
						children: [],
					},
					{
						id: uid(),
						label: 'Новый грид',
						text: 'Новый грид, ранее доступный как экспериментальная функция теперь доступен для всех на компьютерах и планшетах.',
						children: [],
					},
					{
						id: uid(),
						label: 'Агрегация карточек в представлениях',
						text: 'При установленном и сконфигурированном полнотекстовом поиске Elasticsearch, становится доступной функция агрегации карточек в представлении.',
						children: [],
					},
					{
						id: uid(),
						label: 'Развернуть окно на весь экран',
						text: 'Добавлена возможность разворачивать окна на весь экран.',
						show: false,
						more: 'Добавлена возможность разворачивать следующие окна на весь экран: <ul><li>Окно добавления ссылок.</li> <li>Окно выбора папки.</li> <li>Окно конструктора справочников.</li> <li>Справочник контрагентов.</li> <li>Справочник сотрудников.</li> <li>Справочник номенклатуры дел.</li> <li>Лист согласования.</li> <li>Дерево исполнения.</li> <li>Окно атрибутивного поиска.</li> <li>Ход согласования.</li></ul> Чтобы развернуть окно на весь экран, нажмите на кнопку в правом верхнем углу окна.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Изменения в библиотеках элементов управления',
				icon: 'mdi-bookshelf',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Элементы управления нового грида',
						text: 'В локации Карточки папки изменён основной элемент нового грида — Карточки папки. ЭУ Карточки папки содержит два встроенных элемента: Тулбар папки и Узел для групповых операций.',
						children: [],
					},
					{
						id: uid(),
						label: 'Новые групповые операции',
						text: 'Добавлены новые групповые операции.',
						show: false,
						more: '<ul><li>Прочитать — позволяет прочитать сразу группу карточек.</li> <li>Удалить карточку — позволяет окончательно удалить карточку.</li> <li>Скачать файлы карточки — позволяет скачать основные или дополнительные файлы, а также файлы подписи из карточки.</li></ul>',
						children: [],
					},
					{
						id: uid(),
						label: 'Таблица исполнения заданий',
						text: 'В элемент управления добавлено новое свойство Сортировка, позволяющее задать сортировку по умолчанию.',
						children: [],
					},
					{
						id: uid(),
						label: 'Избранное',
						text: 'Добавлен новый элемент управления Избранное, позволяющий добавить карточку в папку Избранное.',
						children: [],
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-1356',
						text: 'TextArea HtmlEditor автоматический Scroll.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1421',
						text: 'Ошибка "NullReferenceException" в StaffDirectoryItems.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1286',
						text: 'При отмене согласования в истории карточки нет соответствующей записи.',
						children: [],
					},
					{
						id: uid(),
						label: 'WebC-11062',
						text: 'Блок с файлом отчета по умолчанию отображается свёрнутым.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1218',
						text: 'После создания новой версии файла до обновления страницы по умолчанию отображается старая версия файла.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1230',
						text: 'Не сохраняются данные в контроле после перехода с Web-клиента 14 на Web-клиент 16.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1314',
						text: 'Недоступная для выбора организация, доступна в StaffDirectoryItems.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1261',
						text: 'В истории карточки не фиксируется операция "Создать согласование".',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1290',
						text: 'В поле атрибутивного поиска Автор = Я отображается не текущий пользователь, а предыдущий пользователь под которым был логин в Web-клиенте.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1070',
						text: 'Создается лишняя сессия учётной записи пула приложений Web-клиента при аутентификации пользователя и при запуске Конструктора Web-разметок.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1069',
						text: 'При закрытии конструктора Web-разметок не освобождается лицензия.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1259',
						text: 'Параметрический поиск. Не возвращаются последние результаты поиска после возврата назад из карточки.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-0001',
						text: 'В окне поиска нельзя было выбрать сотрудника с флагом Не показывать при выборе.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1217',
						text: 'После изменения файла не обновляется версия.',
						children: [],
					},
					{
						id: uid(),
						label: 'ERR-1216',
						text: 'После разворачивания сворачивания папки в боковом меню счетчик непрочитанных сбивается на предыдущее значение.',
						children: [],
					},
				],
			},
		],
	},
	{
		ver: '5.5.5957.141',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Доработан элемент управления "Текст"',
						text: 'Элемент управления Текст доработан: появилась возможность вставить текст без форматирования и изменить размер шрифта. Также улучшена работа с вставляемыми в ЭУ таблицами и вставляемым текстом.',
					},
					{
						id: uid(),
						label: 'Изменена строка поиска',
						text: 'Внешний вид строки поиска был переработан. Добавлена кнопка "Найти", иначе оформлен выбор области поиска.',
					},
					{
						id: uid(),
						label: 'Сортировка в Таблице исполнения заданий',
						text: 'В таблице исполнения заданий теперь можно сортировать задания нажатием на столбец.',
					},
					{
						id: uid(),
						label: 'Избранные карточки',
						text: 'Добавлена возможность добавить карточку в избранное.',
					},
					{
						id: uid(),
						label: 'Новый формат экспорта решения',
						text: 'Решения хранятся в новом виде. Появился дополнительный формат хранения и экспорта решений. Теперь решение можно экспортировать не одним файлом, а пакетом (папкой). Подробнее см. Экспортировать Решение и Импортировать Решение.',
					},
					{
						id: uid(),
						label: 'Отображение результатов поиска',
						text: 'Теперь полнотекстового поиска отображаются как отдельная папка с представлением Результаты поиска и функциями нового грида.',
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-1229',
						text: 'Сессия со счётчиками продолжает быть активной после закрытия основной сессии по таймауту еще какое-то время.',
					},
					{
						id: uid(),
						label: 'ERR-1208',
						text: 'Зависание сохранения карточки при использовании args.cancel() в скрипте события «On preparing card save».',
					},
					{
						id: uid(),
						label: 'ERR-1222',
						text: 'Отображается пустая страница при нажатии кнопки "Назад" из карточки, если перед этим переключать файлы в filePreview.',
					},
					{
						id: uid(),
						label: 'ERR-0002',
						text: 'Не сохраняется значение нумератора.',
					},
					{
						id: uid(),
						label: 'ERR-1206',
						text: 'Отсутствует контроллер EmployeesController, без которого невозможна работа EmployeesAutoComplete.',
					},
					{
						id: uid(),
						label: 'ERR-1184',
						text: 'При создании задания по карточке документа в предпросмотре отображается по умолчанию дополнительный файл, а не основной.',
					},
					{
						id: uid(),
						label: 'ERR-1184',
						text: 'При создании задания по карточке документа в предпросмотре отображается по умолчанию дополнительный файл, а не основной.',
					},
					{
						id: uid(),
						label: 'ERR-1159',
						text: 'Новый грид. При открытии непрочитанной карточки счетчик в папке не уменьшается.',
					},
					{
						id: uid(),
						label: 'ERR-0003',
						text: 'Правка для сценария автоматического объединения версий.',
					},
					{
						id: uid(),
						label: 'ERR-283',
						text: 'Не работает прокрутка в боковом меню на ios.',
					},
					{
						id: uid(),
						label: 'ERR-1001',
						text: 'Некорректное отображение кодировки файла при предпросмотре.',
					},
					{
						id: uid(),
						label: 'ERR-947',
						text: 'Если в карточке нет файла, то в превью файла отображается файл из последней открытой карточки.',
					},
					{
						id: uid(),
						label: 'ERR-1055',
						text: 'Вместо результатов поиска отображается пустая страница.',
					},
					{
						id: uid(),
						label: 'ERR-961',
						text: 'Не всплывает окно с избранными сотрудниками при получении фокуса StaffDirectoryItems.',
					},
					{
						id: uid(),
						label: 'ERR-909',
						text: 'Неправильный порядок этапов в ходе согласования.',
					},
				],
			},
		],
	},
	{
		ver: '5.5.5957.117',
		children: [
			{
				id: uid(),
				head: 'Функциональные изменения',
				icon: 'mdi-briefcase-outline',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Новые групповые операции',
						text: 'Пользователю доступна работа с новыми групповыми операциями.',
						show: false,
						more: '<ul><li>Прочитать — позволяет прочитать сразу группу карточек.</li> <li>Удалить карточку — позволяет удалить карточку в корзину или перманентно.</li> <li>Скачать файлы карточки — позволяет скачать основные или дополнительные файлы, а также файлы подписи из карточки.</li></ul>',
					},
					{
						id: uid(),
						label: 'Отправить карточку по email',
						text: 'Добавлена возможность отправить карточку по электронной почте.',
					},
					{
						id: uid(),
						label: 'Поля карточки с режимом предпросмотра',
						text: 'Теперь, если в карточке отображается предварительный просмотр файла, поля любой карточки Управление документами (пустое пространство по обе стороны карточки) составляют 5 px.',
					},
				],
			},
			{
				id: uid(),
				head: 'Изменения в библиотеках элементов управления',
				icon: 'mdi-bookshelf',
				model: false,
				children: [
					{
						id: uid(),
						label: 'Новое свойство ЭУ "Данные папки"',
						text: 'Добавлено новое свойство Выбор представления для режима Системная папка, позволяющее ограничить выбор доступных представлений в папке. Подробнее см. Данные папки.',
					},
					{
						id: uid(),
						label: 'Элемент управления SignatureButton',
						text: 'Для работы с подписью.',
					},
					{
						id: uid(),
						label: 'Максимальная высота для ЭУ "Блок"',
						text: 'Для элемента управления Блок добавлено свойство Максимальная высота, позволяющее ограничить максимальную высоту блока. При превышении максимальной высоты, у блока появляется полоса прокрутки нового грида.',
					},
					{
						id: uid(),
						label: 'Элемент управления emailButton',
						text: 'Добавлен элемент управления Кнопка отправки письмом, позволяющий отправить карточку по электронной почте.',
					},
					{
						id: uid(),
						label: 'Устаревшие элементы управления',
						text: 'Элементы управления "Сотрудники" и "Сотрудник" теперь считаются устаревшими и недоступны для выбора в библиотеке ЭУ при настройке разметок. Уже существующие разметки с использованием этих ЭУ работают как раньше.',
					},
				],
			},
			{
				id: uid(),
				head: 'Исправленные ошибки',
				icon: 'mdi-alert',
				model: false,
				children: [
					{
						id: uid(),
						label: 'ERR-1022',
						text: 'Контролы Employee и MultipleEmployees. При повторном клике по "Показать последние" список не раскрывается.',
					},
					{
						id: uid(),
						label: 'ERR-1026',
						text: 'Отображение контрола FilePicker в таблице - отсутствует кнопка удаления файла.',
					},
					{
						id: uid(),
						label: 'ERR-906',
						text: 'При отмене поиска по атрибутам происходит долгая загрузка страницы и перенаправление на предыдущую папку.',
					},
					{
						id: uid(),
						label: 'ERR-901',
						text: 'Не применяется сортировка в поисковых папках в старом гриде.',
					},
					{
						id: uid(),
						label: 'ERR-988',
						text: 'Проблемы с сохранением карточек задания в разметке просмотра.',
					},
					{
						id: uid(),
						label: 'ERR-921',
						text: 'После ухода сессии в офлайн, вторая сессия Web-клиента продолжает оставаться активной и выполняет расчёт счетчиков.',
					},
					{
						id: uid(),
						label: 'ERR-919',
						text: 'Некорректна работа инсталлятора при отдельной установке конструктора Web-разметок от сервера Web-клиента.',
					},
					{
						id: uid(),
						label: 'WebC-10940',
						text: 'Изменение контрола ввода комментария при завершении задания на согласование с TextBox на TextArea.',
					},
					{
						id: uid(),
						label: 'ERR-804',
						text: 'После экспорта представления из Web-клиента в Excel в конец строк экспортированного файла добавляется пробел.',
					},
					{
						id: uid(),
						label: 'WebC-11191',
						text: 'Не отображается комментарий к решению в задании и в контроле Ход согласования связанного документа.',
					},
					{
						id: uid(),
						label: 'WebC-11132',
						text: 'Не заполняется значение в контроле "Записи справочника сотрудников" с режимом редактирования по месту.',
					},
					{
						id: uid(),
						label: 'WebC-11130',
						text: 'Не работают условия выбора по виду карточки в диалоге делегирования.',
					},
					{
						id: uid(),
						label: 'WebC-11022',
						text: 'Контрол Выбор папки. Некорректная работа контрола.',
					},
					{
						id: uid(),
						label: 'WebC-11046',
						text: 'Если карточку документа подписать простой подписью, то у подписи добавляется лишнее поле "За кого" и фамилия подписанта.',
					},
					{
						id: uid(),
						label: 'WebC-10974',
						text: 'Справочник сотрудников. В должности отображаются сотрудники из ранее выбранной должности.',
					},
				],
			},
		],
	},
]

export { versions }
