import { uid } from 'quasar'

const errors = [
	{
		id: uid(),
		label: 'Ошибки',
		header: 'root',
		children: [
			{
				id: uid(),
				label: 'Войдет в следующую версию',
				children: [{ label: 'ERR-2514', text: 'Ошибка при обновлении ВК' }],
			},
			{
				id: '1',
				label: '5.5.5957.274',
				children: [
					{
						label: 'ERR-2464',
						text: 'ЭУ Записи справочника сотрудников. При поиске сотрудника возникает ошибка SQLFailure.',
					},
					{
						label: 'ERR-958',
						text: 'В превью отображается содержимое файла если у пользователя запрещено чтение файла по ролевой.',
					},
					{
						label: 'ERR-2440',
						text: 'Ломается разметка окна поиска у папки "Поиск квартальных целей".',
					},
					{
						label: 'ERR-896',
						text: 'Нет возможности переопределить обработчик LifeCycle в InitializeContainer серверного расширения.',
					},
					{ label: 'ERR-2346', text: 'Отсутствие иконки (решения) при делегировании с возвратом.' },
					{
						label: 'ERR-2390',
						text: 'Комментарий от делегата отображается неправильно в ходе согласования.',
					},
					{ label: 'ERR-2279', text: 'Игнорируется пропуск этапов после запуска согласования.' },
					{ label: 'ERR-0004', text: 'Ошибка контрола файла согласования.' },
					{ label: 'ERR-2336', text: 'Не копируются операции при копировании разметок.' },
					{
						label: 'ERR-2183',
						text: 'В заданиях не отображается ссылка на основной документ если задания созданы из другого задания КС.',
					},
					{
						label: 'ERR-2281',
						text: 'Если офлайн пользователи не убираются из списка задач на пересчет в worker-e, то у онлайн пользователей престают работать счетчики в папке.',
					},
					{
						label: 'ERR-2222',
						text: 'Текст метки ЭУ переносится на новую строку справа от метки.',
					},
				],
			},
			{
				id: '2',
				label: '5.5.5957.250',
				children: [
					{ label: 'ERR-2174', text: 'Календарь по умолчанию не учитывается при расчёте сроков.' },
					{
						label: 'ERR-1630',
						text: 'Ошибочно срабатывает запрет на создания карточки при создании связанной карточки.',
					},
					{ label: 'ERR-1840', text: 'Не открывается xlsx файл в "ход согласования".' },
					{
						label: 'ERR-1276',
						text: 'При копировании разметки в другое решение частично сбрасываются операции редактирования.',
					},
					{
						label: 'ERR-1757',
						text: 'Ошибка при поиске сотрудника в контроле StaffDirectoryItems, если в имени организации присутствует символ &.',
					},
					{ label: 'ERR-1857', text: 'Не добавляются старые групповые операции в новый грид.' },
					{
						label: 'ERR-2094',
						text: 'Не отображается архивное задание в таблице исполнения карточки документа.',
					},
					{
						label: 'ERR-2111',
						text: 'Нет возможности пропускать все внешние ресурсы при конвертации файлов при предпросмотре.',
					},
					{
						label: 'ERR-2102',
						text: 'IFileConvertationService должен поддерживать использование клиентских конвертеров.',
					},
					{
						label: 'ERR-2060',
						text: 'В справочнике сотрудников не отображаются колонки ФИО, Фамилия, Имя, Отчество.',
					},
					{
						label: 'ERR-2095',
						text: 'Корень WebFrame. Не работает условие роли для отображения разметки.',
					},
					{
						label: 'ERR-2030',
						text: 'Uncaught TypeError: Cannot read properties of null (reading "textContent") при наличии файла, недоступного для предпросмотра среди основных файлов в задании на согласование.',
					},
					{
						label: 'ERR-1829',
						text: 'Не отображается задание в таблице исполнения документа, если документ добавлен в архив.',
					},
					{
						label: 'ERR-2086',
						text: 'Предпросмотр разных версий файла в FileList показывает только первую версию документа.',
					},
				],
			},
			{
				id: '3',
				label: '5.5.5957.226',
				children: [
					{
						label: 'ERR-2085',
						text: 'Старый грид. Не работает настройка группировки представления "показывать раскрытой".',
					},
					{
						label: 'ERR-2028',
						text: 'Текст одного сотрудника накладывается на текст другого при настройке этапа согласование, если настроено собственное отображение сотрудников.',
					},
					{
						label: 'ERR-2073',
						text: 'Неверная сортировка папок в боковом меню. Папки с вложениями имеют приоритет при сортировке.',
					},
					{ label: 'ERR-2036', text: 'Не происходит выравнивание текста по правому краю.' },
					{
						label: 'ERR-2003',
						text: 'В этапе невозможно изменять параметры если согласующие вычисляются через бизнес-процесс..',
					},
					{
						label: 'ERR-1997',
						text: 'В созданных вручную этапах нет возможности выполнять подписание простой подписью.',
					},
					{
						label: 'ERR-1829',
						text: 'Не отображается содержимое вкладки "Исполнение" в карточке резолюции после архивирования карточки.',
					},
					{
						label: 'ERR-1842',
						text: 'Не работает группировка в новом гриде для числовых колонок.',
					},
					{
						label: 'ERR-1880',
						text: 'В контроле StaffDirectoryItems не очищается предыдущее значение.',
					},
					{
						label: 'ERR-1863',
						text: 'Не сохраняются данные элемента управления Записи справочника сотрудников, если несколько элементов данного типа были связаны с одной секцией карточки.',
					},
					{
						label: 'ERR-1804',
						text: 'Сортировка файлов из нескольких источников в пределах одной веб-страницы.',
					},
					{ label: 'ERR-1808', text: 'В событии cardSaved не передаются bindings.' },
					{ label: 'ERR-1630', text: 'Запрет создания карточки.' },
					{ label: 'ERR-1572', text: 'Изменение формата даты в виджете последних карточек.' },
					{
						label: 'ERR-1566',
						text: 'Ошибка при генерации номера документа : Internal Server Error.',
					},
				],
			},
			{
				id: '4',
				label: '5.5.5957.195',
				children: [
					{
						label: 'ERR-1795',
						text: 'При редактировании через WebDav временный файл пишется прямо на диск C..',
					},
					{
						label: 'ERR-1694',
						text: 'FilePicker. Есть возможность удалить файл даже если установлен режим редактирования "Без редактирования".',
					},
					{
						label: 'ERR-1639',
						text: 'Ошибка internal Server Error при отмене создания задания на исполнение.',
					},
					{
						label: 'ERR-1673',
						text: 'В окне параметров поиска в поле текущее время отображается время разметки из кэша.',
					},
					{
						label: 'ERR-1682',
						text: 'В историю добавляется запись об изменении значения в контроле Dropdown при сохранении карточки, тогда как фактически значение не менялось..',
					},
					{
						label: 'ERR-1746',
						text: 'Форма просмотра. Отображение флагов не отцентрировано по метке..',
					},
					{
						label: 'ERR-1050',
						text: 'Ошибка при открытии модального окна настройки прав доступа в справочнике сотрудников.',
					},
					{
						label: 'WebC-10823',
						text: '"Режим отложенных изменений уже включен." при установке флага.',
					},
					{
						label: 'ERR-1669',
						text: 'Не добавляется ссылка на файл в контроле PartnersDepartment.',
					},
					{
						label: 'ERR-1360',
						text: 'после удаления ссылки и последующем выборе "пустой ссылки" добавляется значение удаленной ссылки.',
					},
					{
						label: 'ERR-1532',
						text: 'Отключенные папки из боковой панели продолжают отображаться в панели после обновления страницы.',
					},
					{ label: 'ERR-1352', text: 'ЭП накладывается вертикально.' },
					{
						label: 'ERR-1051',
						text: 'Ошибка при открытии модального окна настройки прав доступа в справочнике сотрудников.',
					},
					{
						label: 'ERR-1529',
						text: 'Ошибка при попытке добавления файла через контрол FilePicker.',
					},
					{
						label: 'ERR-1260',
						text: 'Нельзя создать сотрудника или отредактировать поля у уже созданного в Справочнике сотрудников.',
					},
				],
			},
			{
				id: '5',
				label: '5.5.5957.174',
				children: [
					{ label: 'ERR-1356', text: 'TextArea HtmlEditor автоматический Scroll.' },
					{ label: 'ERR-1421', text: 'Ошибка "NullReferenceException" в StaffDirectoryItems.' },
					{
						label: 'ERR-1286',
						text: 'При отмене согласования в истории карточки нет соответствующей записи.',
					},
					{
						label: 'WebC-11062',
						text: 'Блок с файлом отчета по умолчанию отображается свёрнутым.',
					},
					{
						label: 'ERR-1218',
						text: 'После создания новой версии файла до обновления страницы по умолчанию отображается старая версия файла.',
					},
					{
						label: 'ERR-1230',
						text: 'Не сохраняются данные в контроле после перехода с Web-клиента 14 на Web-клиент 16.',
					},
					{
						label: 'ERR-1314',
						text: 'Недоступная для выбора организация, доступна в StaffDirectoryItems.',
					},
					{
						label: 'ERR-1261',
						text: 'В истории карточки не фиксируется операция "Создать согласование".',
					},
					{
						label: 'ERR-1290',
						text: 'В поле атрибутивного поиска Автор = Я отображается не текущий пользователь, а предыдущий пользователь под которым был логин в Web-клиенте.',
					},
					{
						label: 'ERR-1070',
						text: 'Создается лишняя сессия учётной записи пула приложений Web-клиента при аутентификации пользователя и при запуске Конструктора Web-разметок.',
					},
					{
						label: 'ERR-1069',
						text: 'При закрытии конструктора Web-разметок не освобождается лицензия.',
					},
					{
						label: 'ERR-1259',
						text: 'Параметрический поиск. Не возвращаются последние результаты поиска после возврата назад из карточки.',
					},
					{
						label: 'ERR-0001',
						text: 'В окне поиска нельзя было выбрать сотрудника с флагом Не показывать при выборе.',
					},
					{ label: 'ERR-1217', text: 'После изменения файла не обновляется версия.' },
					{
						label: 'ERR-1216',
						text: 'После разворачиваниясворачивания папки в боковом меню счетчик непрочитанных сбивается на предыдущее значение.',
					},
				],
			},
			{
				id: '6',
				label: '5.5.5957.141',
				children: [
					{
						label: 'ERR-1229',
						text: 'Сессия со счётчиками продолжает быть активной после закрытия основной сессии по таймауту еще какое-то время.',
					},
					{
						label: 'ERR-1208',
						text: 'Зависание сохранения карточки при использовании args.cancel() в скрипте события «On preparing card save».',
					},
					{
						label: 'ERR-1222',
						text: 'Отображается пустая страница при нажатии кнопки "Назад" из карточки, если перед этим переключать файлы в filePreview.',
					},
					{ label: 'ERR-0002', text: 'Не сохраняется значение нумератора.' },
					{
						label: 'ERR-1206',
						text: 'Отсутствует контроллер EmployeesController, без которого невозможна работа EmployeesAutoComplete.',
					},
					{
						label: 'ERR-1184',
						text: 'При создании задания по карточке документа в предпросмотре отображается по умолчанию дополнительный файл, а не основной.',
					},
					{
						label: 'ERR-1184',
						text: 'При создании задания по карточке документа в предпросмотре отображается по умолчанию дополнительный файл, а не основной.',
					},
					{
						label: 'ERR-1159',
						text: 'Новый грид. При открытии непрочитанной карточки счетчик в папке не уменьшается.',
					},
					{ label: 'ERR-0003', text: 'Правка для сценария автоматического объединения версий.' },
					{ label: 'ERR-283', text: 'Не работает прокрутка в боковом меню на ios.' },
					{
						label: 'ERR-1001',
						text: 'Некорректное отображение кодировки файла при предпросмотре.',
					},
					{
						label: 'ERR-947',
						text: 'Если в карточке нет файла, то в превью файла отображается файл из последней открытой карточки.',
					},
					{ label: 'ERR-1055', text: 'Вместо результатов поиска отображается пустая страница.' },
					{
						label: 'ERR-961',
						text: 'Не всплывает окно с избранными сотрудниками при получении фокуса StaffDirectoryItems.',
					},
					{ label: 'ERR-909', text: 'Неправильный порядок этапов в ходе согласования.' },
				],
			},
			{
				id: '7',
				label: '5.5.5957.117',
				children: [
					{
						label: 'ERR-1022',
						text: 'Контролы Employee и MultipleEmployees. При повторном клике по "Показать последние" список не раскрывается.',
					},
					{
						label: 'ERR-1026',
						text: 'Отображение контрола FilePicker в таблице - отсутствует кнопка удаления файла.',
					},
					{
						label: 'ERR-906',
						text: 'При отмене поиска по атрибутам происходит долгая загрузка страницы и перенаправление на предыдущую папку.',
					},
					{
						label: 'ERR-901',
						text: 'Не применяется сортировка в поисковых папках в старом гриде.',
					},
					{
						label: 'ERR-988',
						text: 'Проблемы с сохранением карточек задания в разметке просмотра.',
					},
					{
						label: 'ERR-921',
						text: 'После ухода сессии в офлайн, вторая сессия Web-клиента продолжает оставаться активной и выполняет расчёт счетчиков.',
					},
					{
						label: 'ERR-919',
						text: 'Некорректна работа инсталлятора при отдельной установке конструктора Web-разметок от сервера Web-клиента.',
					},
					{
						label: 'WebC-10940',
						text: 'Изменение контрола ввода комментария при завершении задания на согласование с TextBox на TextArea.',
					},
					{
						label: 'ERR-804',
						text: 'После экспорта представления из Web-клиента в Excel в конец строк экспортированного файла добавляется пробел.',
					},
					{
						label: 'WebC-11191',
						text: 'Не отображается комментарий к решению в задании и в контроле Ход согласования связанного документа.',
					},
					{
						label: 'WebC-11132',
						text: 'Не заполняется значение в контроле "Записи справочника сотрудников" с режимом редактирования по месту.',
					},
					{
						label: 'WebC-11130',
						text: 'Не работают условия выбора по виду карточки в диалоге делегирования.',
					},
					{ label: 'WebC-11022', text: 'Контрол Выбор папки. Некорректная работа контрола.' },
					{
						label: 'WebC-11046',
						text: 'Если карточку документа подписать простой подписью, то у подписи добавляется лишнее поле "За кого" и фамилия подписанта.',
					},
					{
						label: 'WebC-10974',
						text: 'Справочник сотрудников. В должности отображаются сотрудники из ранее выбранной должности.',
					},
				],
			},
		],
	},
]

export { errors }
