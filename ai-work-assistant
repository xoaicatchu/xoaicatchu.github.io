# AI Work Assistant — Chính sách quyền riêng tư / Privacy Policy

**Cập nhật / Last updated: 13 October 2026**

## Tiếng Việt

### 1. Phạm vi và mục đích

AI Work Assistant là tiện ích trình duyệt hỗ trợ quản lý công việc trên Jira: đọc ticket, phân công, tạo subtask, ghi giờ làm việc, phân tích bằng AI, nhận lệnh và gửi thông báo Telegram, đồng bộ báo cáo Google Sheets. Chính sách này mô tả dữ liệu được xử lý bởi các chức năng đó.

### 2. Những dữ liệu được xử lý

- **Dữ liệu Jira:** địa chỉ hệ thống và URL ticket; mã, tiêu đề, mô tả, bình luận, trạng thái, loại ticket, người báo cáo, người nhận, hạn xử lý, estimate, worklog, subtask và các trường liên quan. Dữ liệu được dùng để hiển thị, phân tích, báo cáo và thực hiện thao tác công việc được yêu cầu hoặc đã cấu hình.
- **Cấu hình và thông tin kết nối:** địa chỉ Jira, API key của nhà cung cấp AI, bot token Telegram, user/chat/group ID, ánh xạ tài khoản Jira–Telegram, model, endpoint và khóa kết nối Apps Script, lịch tự động và tùy chọn người dùng.
- **Lệnh và nội dung do người dùng cung cấp:** câu hỏi, tin nhắn/lệnh Telegram được bot nhận và xử lý, hướng dẫn dự án, thông tin chuyên môn nhân sự, tài liệu và đoạn mã từ thư mục người dùng chọn cho chức năng phân tích mã nguồn.
- **Dữ liệu lưu cục bộ để vận hành:** bộ nhớ đệm Jira, chỉ mục mã nguồn, kết quả AI, nội dung yêu cầu/phản hồi AI trong nhật ký, lịch sử phân công, bản ghi báo cáo, hàng chờ và lịch sử tin nhắn Telegram, nhật ký lỗi và thông tin chẩn đoán.
- **Thông tin tab liên quan:** URL, tiêu đề và định danh tab được dùng để tìm đúng trang Jira và mở giao diện của tiện ích. Tiện ích không có chức năng thu thập toàn bộ lịch sử duyệt web để quảng cáo.

Tiện ích sử dụng phiên đăng nhập Jira hiện có của trình duyệt để gửi yêu cầu đến Jira. Tiện ích không yêu cầu người dùng cung cấp mật khẩu Jira.

### 3. Dữ liệu gửi đến những bên nào

| Bên nhận | Dữ liệu và mục đích |
| --- | --- |
| **Hệ thống Jira do người dùng cấu hình** | Đọc dữ liệu công việc và gửi các thay đổi như phân công, tạo subtask, bình luận, ghi worklog hoặc đóng ticket theo thao tác/lịch tự động đã cấu hình. |
| **DeepSeek hoặc Anthropic (Claude), tùy nhà cung cấp AI được chọn** | Các yêu cầu AI có thể chứa dữ liệu ticket và bình luận, thông tin nhân sự/khối lượng việc, hướng dẫn dự án, câu hỏi và đoạn mã/tài liệu liên quan nhằm phân tích, đề xuất và trả lời. API key tương ứng được gửi tới nhà cung cấp để xác thực. |
| **Telegram** | Bot token được dùng để xác thực với Telegram Bot API; bot nhận lệnh/tin nhắn được Telegram chuyển về và gửi phản hồi, nội dung ticket, người nhận, hạn xử lý hoặc báo cáo đến chat/nhóm được chọn. Thành viên của chat/nhóm nhận có thể xem những thông tin được gửi. |
| **Google Apps Script và Google Sheets do người dùng cấu hình** | Khi kết nối hoặc đồng bộ, gửi khóa kết nối và các bản ghi báo cáo như mã/tiêu đề ticket, người nhận, thời gian phân công, estimate và trạng thái đến endpoint Apps Script và bảng tính đích. Người có quyền truy cập bảng tính có thể xem dữ liệu đó. |

Các yêu cầu chức năng được gửi trực tiếp tới các dịch vụ tương ứng; tiện ích không có máy chủ trung gian riêng của nhà phát triển để tự động thu thập dữ liệu công việc. Tiện ích không tích hợp SDK quảng cáo hoặc công cụ phân tích hành vi duyệt web, và không bán dữ liệu người dùng.

Các dịch vụ bên ngoài xử lý dữ liệu theo chính sách và điều khoản của họ. Việc lưu giữ, sử dụng và xóa dữ liệu tại các dịch vụ đó phụ thuộc nhà cung cấp, tài khoản và cấu hình liên quan; tiện ích không quyết định thay các dịch vụ này.

### 4. Điều khiển tính năng và truyền dữ liệu tự động

Người dùng có thể chọn nhà cung cấp AI, cấu hình hoặc ngắt Telegram/Sheets và bật/tắt Auto Mode. Khi bật chức năng tự động, tiện ích có thể đọc Jira, gọi AI, gửi thông báo hoặc đồng bộ theo lịch mà không cần bấm từng lần. Lệnh từ các tài khoản Telegram được cho phép cũng có thể kích hoạt những chức năng đã cấu hình.

SR và CR có thể chọn nhóm nhận riêng. Loại ticket không chọn nhóm Telegram vẫn được phân công nhưng không tạo thông báo Telegram mới. Nút “Gửi ngay” gửi tin đang chờ theo yêu cầu trực tiếp của người dùng. Việc không chọn nhóm Telegram không tắt việc gọi AI trong Auto Mode.

### 5. Lưu trữ, bảo vệ và thời gian lưu giữ

Cấu hình, thông tin kết nối, cache, nhật ký và dữ liệu làm việc được lưu trong Chrome local storage, IndexedDB hoặc vùng lưu trữ phiên của tiện ích trên thiết bị. Các kho này không phải dịch vụ lưu mật khẩu có mã hóa riêng của tiện ích. Nhật ký AI có thể chứa nội dung yêu cầu và phản hồi; việc che một số dạng khóa/token không có nghĩa mọi nội dung công việc đã được ẩn danh.

Dữ liệu cục bộ được giữ cho đến khi được thay thế, loại bỏ theo giới hạn nhật ký/bộ nhớ đệm, xóa bằng chức năng tương ứng, hoặc xóa cùng dữ liệu tiện ích trong trình duyệt. Các tệp cấu hình, CSV hoặc bản sao lưu do người dùng xuất ra được giữ tại vị trí họ lưu và phải được quản lý/xóa riêng. Bản sao lưu cấu hình có thể chứa API key và bot token.

Kết nối đến các API DeepSeek, Anthropic, Telegram và Google dùng HTTPS. Kết nối Jira dùng địa chỉ người dùng cấu hình; nếu chọn địa chỉ HTTP thì phần kết nối Jira đó không được bảo vệ bằng TLS. Người dùng nên dùng HTTPS cho hệ thống Jira.

### 6. Ngừng sử dụng và xóa dữ liệu

Người dùng có thể tắt Auto Mode, tắt nhận lệnh Telegram, bỏ nhóm nhận, tắt đồng bộ Sheets, xóa cấu hình/nhật ký hoặc chỉ mục mã nguồn bằng chức năng hiện có, thu hồi khóa/token tại dịch vụ cấp khóa, hoặc gỡ tiện ích và xóa dữ liệu cục bộ qua công cụ trình duyệt.

Tắt chức năng hoặc gỡ tiện ích không tự động xóa tin đã gửi vào Telegram, dữ liệu đã ghi vào Jira/Sheets, dữ liệu nhà cung cấp AI đã nhận hoặc tệp đã xuất. Việc xóa những dữ liệu đó phải được thực hiện tại nơi lưu tương ứng.

### 7. Liên hệ và cập nhật

Yêu cầu liên quan đến chính sách và dữ liệu có thể gửi qua [trang hỗ trợ dự án](https://github.com/xoaicatchu/java-open-library/issues). Đây là kênh công khai; không đưa token, API key, mật khẩu, dữ liệu Jira nội bộ hoặc mã nguồn riêng tư vào nội dung hỗ trợ công khai.

Khi cách xử lý dữ liệu thay đổi, chính sách sẽ được cập nhật với ngày sửa đổi ở đầu trang.

---

## English

### Scope and data processed

AI Work Assistant is a browser extension for Jira assignment, subtask creation, worklogs, AI analysis, Telegram commands/notifications and Google Sheets reporting.

It processes Jira URLs and task data, including issue keys, titles, descriptions, comments, users, due dates, estimates, worklogs and custom fields; user-provided instructions, staff information, questions and Telegram commands; and code/document excerpts from folders selected for code analysis. Relevant tab URLs, titles and identifiers are used to locate Jira pages. It does not collect general browsing history for advertising or request a Jira password; Jira requests use the browser's existing authenticated session.

The extension stores connection settings and credentials (including AI API keys, Telegram bot tokens, chat/user/group IDs and Apps Script connection keys), caches, code indexes, AI request/response logs, assignment records, notification queues/history and diagnostics locally in Chrome storage, IndexedDB or session storage.

### Recipients and purposes

- **Your configured Jira instance:** task retrieval and configured work actions, including assignments, subtasks, comments, worklogs and issue closure.
- **Your selected AI provider, DeepSeek or Anthropic (Claude):** AI prompts may include issue data/comments, staff/workload information, project instructions, questions and relevant code/document excerpts. The provider's API key authenticates these requests.
- **Telegram:** bot authentication, receiving bot-delivered commands/messages, and sending replies, ticket notifications or reports to selected chats/groups. Recipients in those chats/groups can see the transmitted information.
- **Your configured Google Apps Script endpoint and Google Sheets:** connection key and report records, such as ticket identifiers/titles, assignees, assignment times, estimates and status. Users with spreadsheet access can view those records.

Functional requests go directly to their corresponding services, without a separate developer-operated intermediary collecting work data. The extension has no advertising or browsing-behavior analytics SDK and does not sell user data. External services handle received information under their own policies, terms, account settings and retention rules.

### Controls, automatic operation and retention

Users choose AI providers and configure or disable integrations. Enabled automation can read Jira, call AI, send notifications and synchronize reports on a schedule; authorized Telegram commands can also trigger configured functions. SR and CR notification destinations are optional and separate. Disabling Telegram notifications does not disable AI requests in Auto Mode. “Send now” sends a queued message on a direct user action.

Local data remains until replaced, pruned, removed using available controls, or deleted with the extension's browser data. Local storage is not a separately encrypted password vault. AI audit logs can contain request/response content; redacting some credential patterns is not full anonymization. Exported configuration backups can contain credentials and must be managed and deleted separately.

AI, Telegram and Google API connections use HTTPS. Jira uses the configured URL; HTTP Jira connections do not have TLS protection, so HTTPS should be used.

Users can disable automation/integrations, clear available logs/configuration/code indexes, revoke provider credentials, or uninstall the extension and remove its browser data. These actions do not automatically delete previously delivered Telegram messages, Jira/Sheets records, provider-side AI data or exported files; deletion must be requested or performed at the respective destination.

### Contact and updates

Contact the project through [GitHub Issues](https://github.com/xoaicatchu/java-open-library/issues). This is a public channel: do not post secrets, internal Jira data or private source code. Material changes to data handling will be reflected in this policy and its last-updated date.
