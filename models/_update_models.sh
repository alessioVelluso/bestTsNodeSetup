# GET .ENV VARIABLES
export $(grep -v '^#' .env | xargs)

# UPDATE-SCRIPT
node_modules\\.bin\\sequelize-auto -h $DB_HOST -d $DB_NAME -u $DB_USER -x $DB_PASSWORD -p $DB_PORT --dialect $DB_DIALECT -o ./models -l ts